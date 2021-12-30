import requests
from urllib.parse import urlparse
import json


def generate_location(address):
    location = []
    url = f"https://dapi.kakao.com/v2/local/search/address.json?query={address}"

    result = requests.get(urlparse(url).geturl(),
                          headers={"Authorization": "KakaoAK 2b4e1b74f1f5b7c1aa5b307eb8b6825b"}).json()

    lat = result["documents"][0]["x"]
    lng = result["documents"][0]["y"]
    location.append(lat)
    location.append(lng)

    return location


