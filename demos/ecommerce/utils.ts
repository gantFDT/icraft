interface Product {
  name: string;
  models: string[];
}

interface Consumer {
  name: string;
  address?: string; 
}

interface OrderStatus {
  key: string;
  icon: string;
  title: string;
  messageTemplate: string;
}

const ORDER_STATUS: OrderStatus[] = [
  {
    key: "1",
    icon: "🛍️",
    title: "New Order",
    messageTemplate: "Customer placed order for <strong>{product}</strong> at <strong>{time}</strong>"
  },
  {
    key: "2",
    icon: "🏭",
    title: "Processing",
    messageTemplate: "E-commerce platform transferred <strong>{product}</strong> order to overseas warehouse at <strong>{time}</strong>"
  },
  {
    key: "3",
    icon: "📦",
    title: "Shipping Preparation",
    messageTemplate: "Overseas warehouse dispatched <strong>{product}</strong> to international courier at <strong>{time}</strong>"
  },
  {
    key: "4",
    icon: "✈️",
    title: "International Transit",
    messageTemplate: "International courier sent <strong>{product}</strong> to customs at <strong>{time}</strong>"
  },
  {
    key: "5",
    icon: "🛃",
    title: "Customs Cleared",
    messageTemplate: "Customs released <strong>{product}</strong> to local courier at <strong>{time}</strong>"
  },
  {
    key: "6",
    icon: "🚚",
    title: "Out for Delivery",
    messageTemplate: "Local courier is delivering <strong>{product}</strong> to <strong>{consumer}</strong> at <strong>{time}</strong>"
  }
];

const PRODUCTS: Product[] = [
  {
    name: 'iPhone',
    models: ['14 Pro Max', '14 Pro', '14 Plus', '14', '13 Pro', '13']
  },
  {
    name: 'MacBook',
    models: ['Pro 14"', 'Pro 16"', 'Air M2', 'Air M1']
  },
  {
    name: 'iPad',
    models: ['Pro 12.9"', 'Pro 11"', 'Air', 'mini']
  },
  {
    name: 'AirPods',
    models: ['Pro 2', 'Pro', '3rd Gen', 'Max']
  },
  {
    name: 'Apple Watch',
    models: ['Ultra', 'Series 8', 'SE 2nd Gen']
  },
  {
    name: 'Canon EOS',
    models: ['R5', 'R6', 'R7', 'R10', '90D']
  }
];

const CONSUMERS: Consumer[] = [
  { name: 'John Smith', address: 'New York' },
  { name: 'Emma Wilson', address: 'Los Angeles' },
  { name: 'Michael Brown', address: 'Chicago' },
  { name: 'Sarah Davis', address: 'Houston' },
  { name: 'James Johnson', address: 'Phoenix' },
  { name: 'Emily Taylor', address: 'Philadelphia' }
];

const getRandomTime = (): string => {
  const now = new Date();
  return now.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

const getRandomProduct = (): string => {
  const product = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
  const model = product.models[Math.floor(Math.random() * product.models.length)];
  return `${product.name} ${model}`;
};

const getRandomConsumer = (): Consumer => {
  return CONSUMERS[Math.floor(Math.random() * CONSUMERS.length)];
};

const formatMessage = (template: string, data: Record<string, string>): string => {
  return Object.entries(data).reduce((message, [key, value]) => {
    return message.replace(`{${key}}`, value);
  }, template);
};

export const getEcommerceData = async () => {
  const time = getRandomTime();
  const product = getRandomProduct();
  const consumer = getRandomConsumer();

  return ORDER_STATUS.map(({ key, icon, title, messageTemplate }) => ({
    key,
    value: `
      <div style="font-weight: bold; color: #1a73e8; margin-bottom: 4px">${icon} ${title}</div>
      <div>${formatMessage(messageTemplate, {
      time,
      product,
      consumer: `${consumer.name} (${consumer.address})`
    })}</div>
    `
  }));
};


