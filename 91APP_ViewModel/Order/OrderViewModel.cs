using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _91APP_ViewModel.Order
{
    public class OrderViewModel
    {
        public int Id { get; set; }
        public string OrderId { get; set; }
        public int Price { get; set; }
        public int Cost { get; set; }
        public int Status { get; set; }
        public DateTime CreateTime { get; set; }
    }

    public class OrderDetailViewModel
    {
        public int Id { get; set; }
        public string OrderId { get; set; }
        public int ProductId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Cost { get; set; }
        public int Qty { get; set; }
        public DateTime CreateTime { get; set; }
    }

    public class ShippingOrderViewModel
    {
        public int Id { get; set; }
        public string OrderId { get; set; }
        public int Status { get; set; }
        public DateTime CreateTime { get; set; }
    }
}
