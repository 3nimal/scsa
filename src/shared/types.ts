export enum SelectedPage {
    Home = "home",
    Leadership = "leadership",
    OurServices = "ourservices",
    ContactUs = "contactus",
  }
  
  export interface LeadershipType {
    icon: JSX.Element
    title: string
    description: string
    link?: string
  }
  
  export interface ClassType {
    name: string
    description?: string
    image: string
  }