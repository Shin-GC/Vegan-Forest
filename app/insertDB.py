from openpyxl import load_workbook  # 엑셀을 불러오기위해 openpyxl 패키지 사용
from kakao_api import generate_location
from models import Vegan
import app


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
                      menu=ws.cell(row, 7).value, latitude=lat_log[0], longitude=lat_log[1])

        app.db.session.add(vegan)
        print(f"add 성공: {ws.cell(row, 2).value}")

    app.db.session.commit()
