export class Post {
  public _id: string;
  public title: string;
  public content: string;
  public date: string;
  public lat: string;
  public lng: string;
  public comments: any[];
  constructor(
    {
      _id = null,
      title = '',
      content = '',
      date = '',
      lat = '',
      lng = '',
      comments = [],
    } = {}
  ) {
    if (_id) {
      this._id = _id;
    }
    this.title = title;
    this.content = content;
    this.date = date;
    this.lat = lat;
    this.lng = lng;
    this.comments = comments;
  }
}
