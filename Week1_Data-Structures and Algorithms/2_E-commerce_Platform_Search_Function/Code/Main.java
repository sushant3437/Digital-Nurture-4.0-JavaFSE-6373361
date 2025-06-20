package Code;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(408, "Laptop", "Electronics"),
            new Product(204, "Shirt", "Apparel"),
            new Product(145, "Phone", "Electronics"),
            new Product(120, "Book", "Education"),
            new Product(404, "Watch", "Accessories")
        };

       
        Product result1 = SearchService.linearSearch(products, 408);
        if (result1 != null) {
            System.out.println("Linear Search: " + result1);
        } else {
            System.out.println("Linear Search: Product not found");
        }

      
        SearchService.sortProducts(products); 
        Product result2 = SearchService.binarySearch(products, 408);
        if (result2 != null) {
            System.out.println("Binary Search: " + result2);
        } else {
            System.out.println("Binary Search: Product not found");
        }
    }
}
