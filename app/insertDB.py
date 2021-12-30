import app
import requests
from openpyxl import load_workbook  # 엑셀을 불러오기위해 openpyxl 패키지 사용
from kakao_api import generate_location
from models import Vegan
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari / 537.36'}


def insert_db():
    wb = load_workbook(filename='VeganMap.xlsx')
    # 엑셀 불러오기
    ws = wb.active
    # 현재 활성화 되어있는 시트 선택! [ 저는 시트가 하나라서 그게 선택됩니다!]

    for row in range(3, ws.max_row):
        try:
            lat_log = generate_location(ws.cell(row, 6).value)
        except Exception as e:
            lat_log = [f"error{e}", f"error{e}"]
        vegan = Vegan(shop=ws.cell(row, 2).value, address=ws.cell(row, 6).value, sector=ws.cell(row, 3).value,
                      menu=ws.cell(row, 7).value, latitude=lat_log[0], longitude=lat_log[1],
                      region=ws.cell(row, 5).value,
                      image=image_scraping(ws.cell(row, 5).value + " " + ws.cell(row, 2).value))

        app.db.session.add(vegan)
        print(f"add 성공: {ws.cell(row, 2).value}")

    app.db.session.commit()


def image_scraping(search):
    data = requests.get(
        f'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query={search}',
        headers=headers)
    soup = BeautifulSoup(data.text, 'html.parser')
    if data.status_code == 200:
        try:
            images = soup.select('#place_main_ct')
            if len(images) != 0:
                for image in images:
                    img_url = \
                        image.select_one(
                            'div > section > div > div.top_photo_area.type_v4 > div:nth-child(1) > a > img')[
                            'src']
                    print(f'{search} 성공')
                    return img_url
            else:
                print(f'{search} 실패')
                return f"../static/img/carrot.jpg"

        except Exception as e:
            print(f'{search} 실패')
            return f"../static/img/carrot.jpg"


insert_db()
