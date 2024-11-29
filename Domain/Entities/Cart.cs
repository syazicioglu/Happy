using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Cart
    {
        public Guid Id { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public List<CartItem> Items { get; set; } = [];
        public string UserId { get; set; }
        public AppUser User { get; set; }
        
    }
}