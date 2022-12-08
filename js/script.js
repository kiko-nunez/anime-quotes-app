// Contants and Variables
const api_character= "https://animechan.vercel.app/api/random/character?name="

// Cache DOM element reference
const $anime = $("#anime");
const $button = $("#button");
const $textBox = $('#anime-text')
const $choice = $('.anime-selection')
let quote, characterName
const $loadingIndicator = $('#load')
const $characterLabel = $('.character-label')
const $characterPicture = $('#portrait')


// Functions


// API function to pull quote

function getQuote(characterName) {
    let requestUrl = api_character + characterName
  $.ajax(requestUrl).then(
    function (data) {
    quote = data.quote
    $($textBox).text(quote)
    $($loadingIndicator).addClass('hidden')
    },
    function (error) {
      console.log(error);
    }
  );
}

// jQuery functions to listen for selection and hide dropdowns

    $($anime).on('change', function() {
        let $selectedOption = $('#anime > option:selected')
        $('.anime-selection').addClass('hidden')
        let idSelector = "#" + $selectedOption.val()
        $(idSelector).removeClass('hidden')
        $($characterLabel).removeClass('hidden')
    })

    $('.anime-selection').on('change', function() {
        characterName = this.value
    })

// button listener to send api request

$($button).on('click', function() {
    $($loadingIndicator).removeClass('hidden')
    $characterPicture.attr('src', characterPictures[characterName])
    getQuote(characterName)
})

const characterPictures = {
    spike: "https://giffiles.alphacoders.com/116/11660.gif",
    faye: "https://i.pinimg.com/originals/7b/31/7f/7b317fc6836945e5ab30116700a02044.jpg",
    jet: "https://i.pinimg.com/originals/ea/ca/03/eaca03beab50a1d123243debb30064d8.png",
    vicious: "https://i.pinimg.com/564x/b3/38/14/b3381423bfa375b55abddc39c51417a5.jpg",
    naruto: "https://i.pinimg.com/736x/ee/61/37/ee61374e60f036d0d605c37b3a7bee8a.jpg",
    sasuke: "https://wallpapers-clan.com/wp-content/uploads/2022/06/naruto-sasuke-uchiha-pfp-1.jpg",
    lee: "https://ami.animecharactersdatabase.com/images/naruto/Child_Rock_Lee.png",
    jiraiya: "https://i.pinimg.com/236x/c1/73/7d/c1737d04cffd8badb9b7bd607dfbe305.jpg",
    madara: "https://wallpapers-clan.com/wp-content/uploads/2022/09/madara-pfp-8.jpg",
    ichigo: "https://imgix.ranker.com/list_img_v2/1360/2681360/original/the-best-ichigo-quotes",
    aizen: "https://64.media.tumblr.com/5158a77c740e8afe8bb7b3939614b7e6/ff28a29d4eb47300-0f/s1280x1920/65b80dc21cbd985362c6adb10c443377c29de7ed.jpg",
    orihime: "https://i.pinimg.com/originals/c2/c5/de/c2c5de078fe99fac967dd70fcb8d27bc.png",
    shunsui: "https://i.pinimg.com/originals/b2/d9/62/b2d9620114ca1bb50c9c22e9f0259f15.png",
    urahara: "https://static.wikia.nocookie.net/bleach/images/8/8f/Ep6KisukeUrahara.png/revision/latest/scale-to-width-down/1200?cb=20210313004610&path-prefix=en",
    luffy: "https://i.pinimg.com/474x/33/b7/45/33b7457105d6c4c0e108ae368c2f37ff.jpg",
    zoro: "https://static.wikia.nocookie.net/b2d8d23d-6149-4040-9c65-fedfcb50200b/scale-to-width/370",
    sanji: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4LQKOsaGG8iS4i18s1aij2sZqb_f1X0rSQ&usqp=CAU",
    usopp: "https://media.tenor.com/6a2iac6p5QMAAAAM/one-piece-usopp.gif",
    roger: "https://static1.personality-database.com/profile_images/ba55b03d40fc4085b9f940e0528efd6d.png",
    edward: "https://i.pinimg.com/474x/6c/60/70/6c6070b90c0e63774c7b96b435e21253.jpg",
    winry: "https://i.pinimg.com/736x/5a/94/9c/5a949c2552a99538fb828fc6a4a8629a.jpg",
    alphonse: "https://i.pinimg.com/236x/70/74/36/7074362c8464071178679752e850e3e2.jpg",
    greed: "https://64.media.tumblr.com/4d1d4b232f525eebd3196e235fda3871/tumblr_po2greN2CR1sx8ybdo4_400.png",
    mustang: "https://i.pinimg.com/236x/4e/41/68/4e41685fbf7bdee79f9809d1cdb21c28--hawkeye-mustangs.jpg"
}


