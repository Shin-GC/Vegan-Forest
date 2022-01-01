import os
import json
from flask import Flask, render_template, request
from models import db, Vegan

app = Flask(__name__)

# 현재있는 파일의 디렉토리 절대경로
base_dir = os.path.abspath(os.path.dirname(__file__))

# basdir 경로안에 DB파일 만들기
db_file = os.path.join(base_dir, 'db.sqlite')

# SQLAlchemy 설정

# 내가 사용 할 DB URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_file
# 비지니스 로직이 끝날때 Commit 실행(DB반영)
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
# 수정사항에 대한 TRACK
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# SECRET_KEY

secret_file = os.path.join(base_dir, 'secrets.json')  # secrets.json 파일 위치를 명시
with open(secret_file) as f:
    secrets = json.loads(f.read())['SECRET_KEY']
app.config['SECRET_KEY'] = secrets

db.init_app(app)
db.app = app
db.create_all() # 데이터베이스 초기화


@app.route("/")
def index():
    return render_template("main.html")


@app.route("/data", methods=["POST"])
def show_shop():
    data = []
    region = request.form["region"]
    vegans = db.session.query(Vegan).filter(Vegan.region == region)
    for v in vegans:
        data.append({'shop': v.shop, 'sector': v.sector, 'region': v.region, 'address': v.address,
                     'menu': v.menu, 'latitude': v.latitude, 'longitude': v.longitude, 'image': v.image}, )
    data = json.dumps(data, ensure_ascii=False)
    return data


@app.route('/search', methods=['POST'])
def shop_search():
    search = request.form['search']
    data = []
    vegans = Vegan.query.filter(Vegan.shop.ilike(f"%{search}%"))
    for v in vegans:
        data.append({'shop': v.shop, 'sector': v.sector, 'region': v.region, 'address': v.address,
                     'menu': v.menu, 'latitude': v.latitude, 'longitude': v.longitude, 'image': v.image}, )

    data = json.dumps(data, ensure_ascii=False)
    print(data)
    return data


if __name__ == "__main__":
    app.debug = True
    app.run()
