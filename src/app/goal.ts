export class Goal {
  showDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public completeDate: Date,

  ) {
    this.showDescription = false; // this keyword is used to give it class access

  }
}
