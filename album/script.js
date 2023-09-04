function openClose() {
    $('#postingBox').toggle();
}
function makeCard() {
    let image = $('#image').val();
    let title = $('#title').val();
    let content = $('#content').val();
    let date = $('#date').val();

    let temp_html = `
    <div class="col">
        <div class="card h-100">
            <img src="${image}""
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${content}</p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">${date}</small>
            </div>
        </div>
    </div>`;
    $('#card').append(temp_html);

}

let url = "http://spartacodingclub.shop/sparta_api/seoulair";
fetch(url).then(res => res.json()).then(data => {
    let mise = data['RealtimeCityAir']['row'][0]['IDEX_NM'];
    console.log(mise)
    $('#msg').text(mise);
})