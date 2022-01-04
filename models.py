from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

db = SQLAlchemy()  # SQLAlchemy 객체 생성


class Vegan(db.Model):
    __tablename__ = "vegan"  # 기본적으로 테이블 이름은 자동으로 정의되지만 이 처럼 명시적으로 정할 수 있다.

    id = db.Column(db.Integer, primary_key=True)
    shop = db.Column(db.String(30))
    address = db.Column(db.String(50))
    sector = db.Column(db.String(10))
    menu = db.Column(db.String(255))
    latitude = db.Column(db.String(30))
    longitude = db.Column(db.String(30))
    region = db.Column(db.String(10))
    image = db.Column(db.String(255))
    user = db.relationship("Users", backref="vegan")


class Users(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(64))
    password = db.Column(db.String(255))
    email = db.Column(db.String(255))
    favorites = db.Column(db.Integer, ForeignKey("vegan.id"))
