export type Video = {
  id: string;
  thumbnail: string;
  logo: string;
  title: string;
  author: string;
  views: string;
  timestamp: string;
  progress?: number;
  subscribers: string;
};

export const VIDEOS: Video[] = [{
      id: "1",
      thumbnail: "/thumbnail.jpg",
      logo: "/logo.png",
      title: "Google Pixel 10 Pro | Launched on 14th August",
      author: "Google USA",
      views: "7M views",
      timestamp: "1 month ago",
      subscribers: "5.8M subscribers"
}, {
      id: "2",
      thumbnail: "/iphone.jpg",
      logo: "/iplogo.jpg",
      title: "iPhone 17 Pro | Launch on 15th September",
      author: "Apple USA",
      views: "550k watching",
      timestamp: "Live",
      subscribers: "18.9M subscribers"
}, {
      id: "3",
      thumbnail: "/samsung.jpg",
      logo: "/sam_thumb.png",
      title: "Samsung Galaxy S24 Ultra | Launched on 15th March",
      author: "Samsung USA",
      views: "45M views",
      timestamp: "6 months ago",
      subscribers: "15.6M subscribers"
}, {
      id: "4",
      thumbnail: "/oneplus.jpg",
      logo: "/op_tn.png",
      title: "One Plus 13 | Launched on 15th December",
      author: "One Plus USA",
      views: "12M views",
      timestamp: "9 months ago",
      subscribers: "1.3M subscribers"
}, {
      id: "5",
      thumbnail: "/xiomi.jpg",
      logo: "/mi_tn.png",
      title: "Xiomi 15 Ultra | Launched on 15th March",
      author: "MI USA",
      views: "9M views",
      timestamp: "6 months ago",
      subscribers: "3.9M subscribers"
}, {
      id: "6",
      thumbnail: "/nothing.jpg",
      logo: "/nt_tn.jpg",
      title: "Nothing Phone 3 | Launched on 15th July",
      author: "Nothing USA",
      views: "3M views",
      timestamp: "2 months ago",
      subscribers: "900k subscribers"
}, {
      id: "7",
      thumbnail: "/thumbnail.jpg",
      logo: "/logo.png",
      title: "Google Pixel 10 Pro | Launched on 15th August",
      author: "Google India",
      views: "2M views",
      timestamp: "1 month ago",
      subscribers: "3.2M subscribers"
}, {
      id: "8",
      thumbnail: "/iphone.jpg",
      logo: "/iplogo.jpg",
      title: "iPhone 17 Pro | Launch on 16th September",
      author: "Apple India",
      views: "10k waiting",
      timestamp: "Coming soon",
      subscribers: "8.1M subscribers"
}, {
      id: "9",
      thumbnail: "/samsung.jpg",
      logo: "/sam_thumb.png",
      title: "Samsung Galaxy S24 Ultra | Launched on 16th March",
      author: "Samsung India",
      views: "15M views",
      timestamp: "6 months ago",
      subscribers: "12.8M subscribers"
}, {
      id: "10",
      thumbnail: "/oneplus.jpg",
      logo: "/op_tn.png",
      title: "One Plus 13 | Launched on 15th January",
      author: "One Plus India",
      views: "8M views",
      timestamp: "8 months ago",
      subscribers: "5.2M subscribers"
}, {
      id: "11",
      thumbnail: "/xiomi.jpg",
      logo: "/mi_tn.png",
      title: "Xiomi 15 Ultra | Launched on 15th March",
      author: "MI India",
      views: "7M views",
      timestamp: "6 months ago",
      subscribers: "6.7M subscribers"
}, {
      id: "12",
      thumbnail: "/nothing.jpg",
      logo: "/nt_tn.jpg",
      title: "Nothing Phone 3 | Launched on 20th July",
      author: "Nothing India",
      views: "765k views",
      timestamp: "2 months ago",
      subscribers: "220k subscribers"
}, {
      id: "13",
      thumbnail: "/thumbnail.jpg",
      logo: "/logo.png",
      title: "Google Pixel 10 Pro | Launched on 29th August",
      author: "Google UK",
      views: "980k views",
      timestamp: "14 days ago",
      subscribers: "1.1M subscribers"
}, {
      id: "14",
      thumbnail: "/iphone.jpg",
      logo: "/iplogo.jpg",
      title: "iPhone 17 Pro | Launch on 22nd October",
      author: "Apple UK",
      views: "1k waiting",
      timestamp: "Coming soon",
      subscribers: "3.2M subscribers"
}, {
      id: "15",
      thumbnail: "/samsung.jpg",
      logo: "/sam_thumb.png",
      title: "Samsung Galaxy S24 Ultra | Launched on 15th May",
      author: "Samsung UK",
      views: "900k views",
      timestamp: "4 months ago",
      subscribers: "4.7M subscribers"
}, {
      id: "16",
      thumbnail: "/oneplus.jpg",
      logo: "/op_tn.png",
      title: "One Plus 13 | Launched on 15th March",
      author: "One Plus UK",
      views: "100k views",
      timestamp: "6 months ago",
      subscribers: "700k subscribers"
}, {
      id: "17",
      thumbnail: "/nothing.jpg",
      logo: "/nt_tn.jpg",
      title: "Nothing Phone 3 | Launched on 15th July",
      author: "Nothing UK",
      views: "1M views",
      timestamp: "2 months ago",
      subscribers: "2.6M subscribers"
}, {
      id: "18",
      thumbnail: "/thumbnail.jpg",
      logo: "/logo.png",
      title: "Google Pixel 10 Pro | Launched on 24th August",
      author: "Google Korea",
      views: "970k views",
      timestamp: "18 days ago",
      subscribers: "1.6M subscribers"
}, {
      id: "19",
      thumbnail: "/iphone.jpg",
      logo: "/iplogo.jpg",
      title: "iPhone 17 Pro | Launch on 30th September",
      author: "Apple Korea",
      views: "5k waiting",
      timestamp: "Coming soon",
      subscribers: "3.2M subscribers"
}, {
      id: "20",
      thumbnail: "/samsung.jpg",
      logo: "/sam_thumb.png",
      title: "Samsung Galaxy S24 Ultra | Launched on 15th March",
      author: "Samsung Korea",
      views: "13M views",
      timestamp: "6 months ago",
      subscribers: "23.2M subscribers"
}, {
      id: "21",
      thumbnail: "/oneplus.jpg",
      logo: "/op_tn.png",
      title: "One Plus 13 | Launched on 15th December",
      author: "One Plus Korea",
      views: "8M views",
      timestamp: "4 months ago",
      subscribers: "809k subscribers"
}, {
      id: "22",
      thumbnail: "/thumbnail.jpg",
      logo: "/logo.png",
      title: "Google Pixel 10 Pro | Launched on 12th September",
      author: "Google China",
      views: "15M views",
      timestamp: "2 days ago",
      subscribers: "32.2M subscribers"
}, {
      id: "23",
      thumbnail: "/iphone.jpg",
      logo: "/iplogo.jpg",
      title: "iPhone 17 Pro | Launch on 2nd October",
      author: "Apple China",
      views: "1M waiting",
      timestamp: "Coming soon",
      subscribers: "23.7M subscribers"
}, {
      id: "24",
      thumbnail: "/samsung.jpg",
      logo: "/sam_thumb.png",
      title: "Samsung Galaxy S24 Ultra | Launched on 15th August",
      author: "Samsung China",
      views: "32M views",
      timestamp: "1 month ago",
      subscribers: "15.7M subscribers"
}, {
      id: "25",
      thumbnail: "/oneplus.jpg",
      logo: "/op_tn.png",
      title: "One Plus 13 | Launched on 15th December",
      author: "One Plus China",
      views: "79M views",
      timestamp: "9 months ago",
      subscribers: "3.2M subscribers"
}, {
      id: "26",
      thumbnail: "/xiomi.jpg",
      logo: "/mi_tn.png",
      title: "Xiomi 15 Ultra | Launched on 15th January",
      author: "MI China",
      views: "89M views",
      timestamp: "6 months ago",
      subscribers: "45.6M subscribers"
}];