using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        //public string BillingAddress { get; set; }
        //public string ShippingAddress { get; set; }
        //navigation
        //public Guid CartId { get; set; }
        //public Cart Cart { get; set; } 
        //public ICollection<Order> Orders { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
    }
}