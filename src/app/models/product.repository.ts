import { Product } from "../products/models/product.model";

export class ProductRepository {
    private products: Product[] = [
        { id: 1, name: "Apple Watch Series 4", price: 200, oldPrice: 300, imageUrl: "1.jpeg", productHeader: "Apple Watch 4 GPS 40mm Silver Aluminium Case with White Sport Band - M/L with AppleCare+ (2 Years)", description: "The Apple Watch Series 4 comes in two sizes — 40mm and 44mm – and also brings along a 30 percent larger display. There's also a redesigned modular watch face with more detailed and graphic information. Users can see stocks and heart rate, track scores from sports teams, view boarding information, and more.", isActive: true, categoryId: 1 },
        { id: 2, name: "Apple Watch Series 5", price: 250, oldPrice: 350, imageUrl: "2.jpeg", productHeader: "Apple Watch 5 GPS 42mm Silver Aluminium Case with White Sport Band - M/L with AppleCare+ (2 Years)", description: "Apple Watch Series 5 (GPS + Cellular) can use a cellular connection for Emergency SOS. To use Emergency SOS on an Apple Watch without cellular, your iPhone needs to be nearby. If your iPhone isn’t nearby, your Apple Watch needs to be connected to a known Wi-Fi network and you must set up Wi-Fi Calling.", isActive: true, categoryId: 1},
        { id: 3, name: "Apple Watch Series 6", price: 300, oldPrice: 400, imageUrl: "3.jpeg", productHeader: "Apple Watch 6 GPS 43mm Silver Aluminium Case with White Sport Band - M/L with AppleCare+ (2 Years)", description: "The most notable changes to the Apple Watch Series 6 include blood oxygen tracking, a faster processor, and a new 2.5x brighter always-on display. New colors include PRODUCT(RED), blue, and graphite. Apple's new Apple Watch band called the Solo Loop and Braided Solo Loop also debuted alongside the Apple Watch 6.", isActive: true, categoryId: 3},
        { id: 4, name: "iPhone 11", price: 750, oldPrice: 850, imageUrl: "4.jpeg", productHeader: "Apple iPhone 11 [64GB, Purple] + Carrier Subscription [Cricket Wireless]", description: "The iPhone 11 was introduced in September 2019, and Apple has continued selling it as a lower-priced option alongside subsequent iPhone generations, dropping to $499 with the launch of the iPhone 13 lineup. The iPhone 11 features a 6.1-inch display, a dual-lens camera, and an A13 Bionic chip.", isActive: true, categoryId: 1},
        { id: 5, name: "Apple Watch Series 7", price: 800, oldPrice: 900, imageUrl: "5.jpeg", productHeader: "Apple Watch Seri 7 Gps, 41MM Siyah Alüminyum Kasa ve Siyah Spor Kordon - Regular MKMX3TU/A", description: "Unlike all the rumors, the new Apple Watch Series 7 doesn't feature a new design. Instead, it does have a larger display with 20% more screen area and thinner borders at 1.7mm, 40% smaller than those on Apple Watch Series 6. This new Apple Watch is available in 41mm and 45mm sizes.", isActive: true, categoryId: 2},
        { id: 6, name: "iPhone 13", price: 950, oldPrice: 1150, imageUrl: "6.jpeg", productHeader: "iPhone 13 Mini, 128GB, Starlight - Unlocked (Renewed Premium)", description: "Apple's 2021 iPhones with updated cameras, smaller notches, and A15 chip. Available at a discount alongside the iPhone 14.", isActive: true, categoryId: 2},
        { id: 7, name: "iPhone 13 Pro Max", price: 1050, oldPrice: 1250, imageUrl: "7.jpeg", productHeader: "iPhone 13 Pro Max, 128GB, Sierra Blue - Unlocked (Renewed Premium)", description: "iPhone 14 models come in 6.1- and 6.7-inch sizes. The new 6.7-inch iPhone 14 is called the iPhone 14 Plus, harkening back to the iPhone 8 and 8 Plus and prior generations. Apple's iPhone 14 models are identical in design to the iPhone 13 models, featuring flat edges, an aerospace-grade aluminum enclosure, and a glass back that enables wireless charging.", isActive: true, categoryId: 2},
        { id: 8, name: "Apple Watch Series ULTRA", price: 550, oldPrice: 650, imageUrl: "8.jpeg", productHeader: "Apple Watch ULTRA GPS 43mm Silver Aluminium Case with White Sport Band - M/L with AppleCare+ (2 Years)", description: "Apple Watch Ultra features all-new apps for scuba and free diving, a redesigned compass, a robust yet lightweight titanium case, precision dual-frequency GPS, and up to 36 hours of battery life.", isActive: true, categoryId: 3}
    ]

    getProducts(): Product[] {
        return this.products.filter(p => p.isActive);
    }

    getProductById(id: number) {
        return this.products.find(p => p.id == id);
    }

    getProductsByCategoryId(id: number): Product[] {
        return this.products.filter(p => p.categoryId == id);
    }
}