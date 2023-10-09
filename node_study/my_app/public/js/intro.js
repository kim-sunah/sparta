
const imgArray = [
    'https://img.freepik.com/premium-photo/backgrounds-light-evening-sky-and-clouds_10221-6289.jpg',
    'https://img.freepik.com/premium-photo/clouds-and-orange-sky-sky-beautiful-sunset-background-in-twilight-time-colorful-scene-amazing-natu_387864-9938.jpg',
    'https://blog.kakaocdn.net/dn/k3wAE/btqTNzIkmJ2/p1GWxBuQTDN94thq0oihJ0/img.jpg',
    'https://mblogthumb-phinf.pstatic.net/MjAxOTA2MDRfMjIy/MDAxNTU5NjMwNjk1MDg1.FW3yK2ECnW-EjwZ4gKW2Ad9J5lnz8nFWBH6c-h-xd_Mg.z1zBSPa_Nu9um8ZsWJNK4WtzSjM7Ewh5AxNiJDsA0bAg.JPEG.13cafe/23.jpg?type=w800'
];
const backgroundImg = imgArray[Math.floor(Math.random() * imgArray.length)];
$('.background-img').attr("src", backgroundImg);