using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Products.Any()) return;
            
            var products = new List<Product>
            {
                new Product
                {
                    Name = "Past Product 1",
                    Description = "Product 2 months ago",
                    Category = "drinks",
                },
                new Product
                {
                    Name = "Past Product 2",
                    Description = "Product 1 month ago",
                    Category = "culture",
                },
                new Product
                {
                    Name = "Future Product 1",
                    Description = "Product 1 month in future",
                    Category = "culture",
                },
                new Product
                {
                    Name = "Future Product 2",
                    Description = "Product 2 months in future",
                    Category = "music",
                },
                new Product
                {
                    Name = "Future Product 3",
                    Description = "Product 3 months in future",
                    Category = "drinks",
                },
                new Product
                {
                    Name = "Future Product 4",
                    Description = "Product 4 months in future",
                    Category = "drinks",
                },
                new Product
                {
                    Name = "Future Product 5",
                    Description = "Product 5 months in future",
                    Category = "drinks",
                },
                new Product
                {
                    Name = "Future Product 6",
                    Description = "Product 6 months in future",
                    Category = "music",
                },
                new Product
                {
                    Name = "Future Product 7",
                    Description = "Product 2 months ago",
                    Category = "travel",
                },
                new Product
                {
                    Name = "Future Product 8",
                    Description = "Product 8 months in future",
                    Category = "film",
                }
            };

            await context.Products.AddRangeAsync(products);
            await context.SaveChangesAsync();
        }
    }
}