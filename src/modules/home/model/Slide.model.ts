export default class SlideModel {
  title: string | undefined;
  subtitle: string | undefined;
  description: string | undefined;
  img: string | undefined;
  btn: string | undefined;
  href: string | undefined;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
