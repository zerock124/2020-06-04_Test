using _91APP_DB.Interface;
using _91APP_DB.Models;
using _91APP_DB.Repositories;
using _91APP_ViewModel.Order;
using _91APP_ViewModel.Share;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _91APP_DB.Service
{
    public class OrderService : IOrderService
    {
        protected readonly APP_TestEntities _db;
        protected readonly IGenericRepository<Order> _orderService;
        protected readonly IGenericRepository<OrderDetail> _orderDetailService;
        protected readonly IGenericRepository<Product> _productService;

        public OrderService()
        {
            _db = new APP_TestEntities();
            _orderService = new GenericRepository<Order>(_db);
            _orderDetailService = new GenericRepository<OrderDetail>(_db);
            _productService = new GenericRepository<Product>(_db);
        }

        public async Task<List<OrderViewModel>> GetOrderList()
        {
            List<OrderViewModel> list = new List<OrderViewModel>();

            var query = from a in _orderService.GetAll()
                        select new OrderViewModel
                        {
                            Id = a.Id,
                            OrderId = a.OrderId,
                            Price = a.Price,
                            Cost = a.Cost,
                            Status = a.Status,
                            CreateTime = a.CreateTime
                        };

            if (query.Any())
            {
                list = query.ToList();
            }

            return await Task.Run(() => list);
        }
        public async Task<List<OrderDetailViewModel>> GetOrderDetail(string OrderId)
        {
            List<OrderDetailViewModel> list = new List<OrderDetailViewModel>();

            var query = from a in _orderDetailService.FindBy(x => x.OrderId == OrderId)
                        join b in _productService.GetAll() on a.ProductId equals b.ProductId
                        select new OrderDetailViewModel
                        {
                            Id = a.Id,
                            OrderId = a.OrderId,
                            Price = a.Price,
                            ProductId = a.ProductId,
                            Cost = a.Cost,
                            Qty = a.Qty,
                            CreateTime = a.CreateTime,
                            Name = b.Name
                        };

            if (query.Any())
            {
                list = query.ToList();
            }

            return await Task.Run(() => list);
        }
        public async Task<VerityResult> ConfirmOrder(List<OrderViewModel> model)
        {
            VerityResult result = new VerityResult();
            List<Order> modellist = new List<Order>();

            foreach (var OrderItem in from item in model
                                      let FindItem = _orderService.FindBy(x => x.OrderId == item.OrderId)
                                      where FindItem.Any()
                                      let OrderItem = FindItem.FirstOrDefault()
                                      select OrderItem)
            {
                OrderItem.Status = 1;
                modellist.Add(OrderItem);
            }

            if (modellist.Any())
            {
                _orderService.UpdateMultiple(modellist);
            }

            return await Task.Run(() => result);
        }
    }
}
