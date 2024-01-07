class Testimonials {
  constructor(author, quote, image) {
    this.author = author;
    this.image = image;
    this.quote = quote;
  }

  html() {
    return `
    <div class="card-testi">
        <img src="${this.image}" alt="">
        <div class="kata-kata">
            <p class="quots">${this.quote}</p>
                <p class="riyan">-${this.author}</p>
        </div>
      </div>
      `;
  }
}

const dataSaya = [
  {
    author: "Riyan Maulana",
    image: "/image/riyan1.jpg",
    quote:
      "Jangan pernah berharap bahwa jalan hidupmu akan seperti jalan hidup orang lain. Perjalanan hidup yang kamu miliki merupakan sesuatu yang unik, seperti dirim",
  },

  {
    author: "Riyan Maulana",
    image: "/image/riyan2.jpg",
    quote:
      "Impian tidak dapat terwujud dengan sendirinya, akan tetapi impian akan datang ketika seseorang berusaha untuk meraihnya",
  },

  {
    author: "Riyan Maulana",
    image: "/image/riyan3.jpg",
    quote:
      "Jangan khawatir, seluruh upaya yang kamu lakukan akan berbuah manis. Berusaha saja yang kuat dan berdoa pula yang kuat",
  },

  {
    author: "Riyan Maulana",
    image: "/image/riyan4.jpg",
    quote:
      "Kita adalah apa yang kita kerjakan secara berulang kali. Oleh karena itu, keunggulan bukanlah suatu hal perbuatan melainkan suatu kebiasaan",
  },
];

const card1 = new Testimonials(
  dataSaya[0].author,
  dataSaya[0].quote,
  dataSaya[0].image
);

const card2 = new Testimonials(
  dataSaya[1].author,
  dataSaya[1].quote,
  dataSaya[1].image
);

const card3 = new Testimonials(
  dataSaya[2].author,
  dataSaya[2].quote,
  dataSaya[2].image
);

const card4 = new Testimonials(
  dataSaya[3].author,
  dataSaya[3].quote,
  dataSaya[3].image
);

const testimonial = [card1, card2, card3, card4];

let cardhtml = "";
for (let i = 0; i < testimonial.length; i++) {
  cardhtml += testimonial[i].html();
}

document.getElementById("testimoniall").innerHTML = cardhtml;
