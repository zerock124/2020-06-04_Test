using _91APP_ViewModel.Order;
using _91APP_ViewModel.Share;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _91APP_DB.Interface
{
    public interface IOrderService
    {
        Task<List<OrderViewModel>> GetOrderList();

        Task<List<OrderDetailViewModel>> GetOrderDetail(string OrderId);

        Task<VerityResult> ConfirmOrder(List<OrderViewModel> model);
    }
}
