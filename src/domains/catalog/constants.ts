export const MOCK_CATEGORIES = [
  { id: "1", name: "New", imageUrl: "https://picsum.photos/id/10/200" },
  { id: "2", name: "Fashion", imageUrl: "https://picsum.photos/id/20/200" },
  { id: "3", name: "Tech", imageUrl: "https://picsum.photos/id/30/200" },
  { id: "4", name: "Home", imageUrl: "https://picsum.photos/id/40/200" },
  { id: "5", name: "Beauty", imageUrl: "https://picsum.photos/id/50/200" },
  { id: "6", name: "Sports", imageUrl: "https://picsum.photos/id/60/200" },
  { id: "7", name: "Toys", imageUrl: "https://picsum.photos/id/70/200" },
];

export const MOCK_PRODUCTS = Array.from({ length: 21 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Product ${i + 1}`,
  imageUrl: `https://picsum.photos/id/${100 + i}/400`,
  price: 10 + ((i + 1) * 7) % 90, // Deterministic price
}));

export const MOCK_COMMENTS = [
  { id: '1', username: 'alex_style', text: 'This looks amazing! Need one ASAP. 🔥', time: '2h' },
  { id: '2', username: 'fashion_guru', text: 'Great quality, definitely recommended!', time: '5h' },
  { id: '3', username: 'minimalist_vibes', text: 'Love the design. Is it available in other colors?', time: '1d' },
  { id: '4', username: 'shop_aholic', text: 'Bought this last week and I love it!', time: '2d' },
  { id: '5', username: 'user_99', text: 'Nice!', time: '3d' },
];
