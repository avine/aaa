import { Component, computed, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lorem',
  imports: [],
  templateUrl: './lorem.component.html',
  styleUrl: './lorem.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoremComponent {
  private lorems = [
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim
  perferendis repellendus ratione perspiciatis amet velit. Libero mollitia
  reprehenderit molestias ullam error, nemo voluptatibus repellendus nisi
  obcaecati optio quasi temporibus!`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deleniti, a
  sunt voluptatum aut commodi nihil tempore quos inventore earum. Autem, fugit
  minima. Cupiditate modi, odit quibusdam officiis quidem impedit!`,

    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ad quo nostrum
  tempora fugiat voluptatum minus consequatur provident aliquam odit molestiae,
  culpa id sint esse deserunt laudantium? Beatae, consequatur fugiat.`,

    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quod iste
  aspernatur totam vero, at quia blanditiis pariatur voluptatum fugit reiciendis
  minima ducimus doloribus quas ipsa. Cumque, corporis? Illo, doloremque.`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id minima
  ratione vero commodi fugit beatae aut totam iusto tempore dolor, animi a
  molestiae nesciunt veniam laboriosam fugiat delectus excepturi!`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facere
  reprehenderit nemo cupiditate quia repellendus rem, voluptate ipsam magnam
  impedit excepturi quidem ullam, itaque labore dolores odit perferendis hic ab.`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. In numquam
  exercitationem voluptatibus optio quas sed, culpa cupiditate doloremque
  eligendi eaque perspiciatis ut repellendus facere sint hic tenetur, voluptatem
  ratione! Ut?`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, est
  atque! Laboriosam omnis non aperiam in fuga itaque, facilis aut natus
  accusantium dolor? Nobis fugit iusto nihil commodi similique id.`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptates!
  Iure suscipit et, necessitatibus nobis reprehenderit itaque! Odit dolores
  sapiente facilis neque, mollitia, architecto, reprehenderit sed ab in beatae
  eius.`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint cum
  aperiam asperiores quibusdam necessitatibus, quisquam, nam deserunt fugiat
  atque sequi inventore debitis nobis consequuntur deleniti nisi sapiente!
  Tempore, dolorem!`,
  ];

  count = input(2);

  protected texts = computed(() => this.lorems.slice(0, this.count()));
}
