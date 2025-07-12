// Types for our MongoDB documents

export interface Event {
  _id?: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface KingsWord {
  _id?: string;
  title: string;
  content: string;
  author: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface News {
  _id?: string;
  title: string;
  content: string;
  image?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface SmallGroup {
  _id?: string;
  name: string;
  location: string;
  meetingDay: string;
  meetingTime: string;
  contactPerson: {
    name: string;
    email: string;
    phone?: string;
  };
  description: string;
  createdAt: Date;
  updatedAt: Date;
}