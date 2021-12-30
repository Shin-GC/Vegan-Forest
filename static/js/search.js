function searchShop() {
  $('#search-box').empty();
  let search = $('#inputSearch').val();
  $.ajax({
    type: 'POST',
    url: '/search',
    data: { search: search },
    success: function (response) {
      let test = JSON.parse(response);
      for (let i = 0; i < test.length; i++) {
        let name = test[i]['상호명'];
        let location = test[i]['도로명주소'];
        let latitude = test[i]['위도'];
        let longitude = test[i]['경도'];
        let img = test[i]['이미지'];
        let temp_html = `<div class="full_list"><div class="list-item"><a href="https://map.naver.com/v5/search/${name}">
        <img src="${img}" onerror="this.src=../static/img/carrot.jpg">
        <p class="shopName">상호명 : ${name}</p>
        <p class="shopAdd">도로명주소 : ${location}</p></a>
        </div>
        </div>`;
        $('#search-box').append(temp_html);
      }
    },
  });
}
// 초기화
function clearShop() {
  $('#search-box').empty();
}
