using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Domain.Entities;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            //if (context.Products.Any() || context.Categories.Any()) return;

            // Kategorileri oluşturma
            var categories = new List<Category>
            {
                new Category { Name = "Decorative", Description = "Home decor items and gifts" },
                new Category { Name = "Toys", Description = "Toys and play items for children and adults" },
                new Category { Name = "Personalized Gifts", Description = "Customizable and personalized gift items" },
                new Category { Name = "Books", Description = "Books and literature items" },
                new Category { Name = "Stationery", Description = "Stationery items, notebooks, pens, etc." },
                new Category { Name = "Accessories", Description = "Jewelry, watches, and fashion accessories" }
            };

            await context.Categories.AddRangeAsync(categories);
            await context.SaveChangesAsync();

            // Kategori nesnelerini id'lerine göre kolay erişmek için Dictionary'ye dönüştürme
            var categoryDict = categories.ToDictionary(c => c.Name, c => c);

            // Ürünleri oluşturma
            var products = new List<Product>
            {
                new Product
                {
                    Name = "Elegant Vase",
                    Description = "A beautiful ceramic vase for home decor.",
                    Price = 45.99M,
                    Stock = 20,
                    Category = categoryDict["Decorative"]
                },
                new Product
                {
                    Name = "Plush Teddy Bear",
                    Description = "Soft and cuddly teddy bear, perfect for children.",
                    Price = 15.99M,
                    Stock = 50,
                    Category = categoryDict["Toys"]
                },
                new Product
                {
                    Name = "Custom Engraved Keychain",
                    Description = "Personalized keychain with custom engraving.",
                    Price = 10.50M,
                    Stock = 100,
                    Category = categoryDict["Personalized Gifts"]
                },
                new Product
                {
                    Name = "Classic Novel Collection",
                    Description = "A collection of timeless literary classics.",
                    Price = 30.00M,
                    Stock = 10,
                    Category = categoryDict["Books"]
                },
                new Product
                {
                    Name = "Notebook Set",
                    Description = "High-quality notebooks for everyday use.",
                    Price = 8.99M,
                    Stock = 200,
                    Category = categoryDict["Stationery"]
                },
                new Product
                {
                    Name = "Stylish Bracelet",
                    Description = "Elegant bracelet to match any outfit.",
                    Price = 25.00M,
                    Stock = 30,
                    Category = categoryDict["Accessories"]
                },
                new Product
                {
                    Name = "Wooden Puzzle",
                    Description = "Fun and challenging wooden puzzle for all ages.",
                    Price = 12.75M,
                    Stock = 40,
                    Category = categoryDict["Toys"]
                },
                new Product
                {
                    Name = "Personalized Mug",
                    Description = "Customizable coffee mug with your name or message.",
                    Price = 9.99M,
                    Stock = 80,
                    Category = categoryDict["Personalized Gifts"]
                },
                new Product
                {
                    Name = "Leather Journal",
                    Description = "Handmade leather journal, perfect for notes and thoughts.",
                    Price = 18.00M,
                    Stock = 25,
                    Category = categoryDict["Stationery"]
                },
                new Product
                {
                    Name = "Vintage Pocket Watch",
                    Description = "Antique-style pocket watch for classic style.",
                    Price = 49.99M,
                    Stock = 15,
                    Category = categoryDict["Accessories"]
                }
            };

            // Ürünleri veritabanına ekleme
            await context.Products.AddRangeAsync(products);
            await context.SaveChangesAsync();
        }
    }
}