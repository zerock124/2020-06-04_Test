using _91APP_DB.Interface;
using _91APP_DB.Service;
using _91APP_ViewModel.Order;
using _91APP_ViewModel.Share;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace _91APP_Test.Controllers
{
    public class OrderController : Controller
    {

        protected readonly IOrderService _orderService;

        public OrderController()
        {
            _orderService = new OrderService();
        }
        // GET: Order
        public ActionResult Index()
        {
            return View();
        }

        public async Task<JsonResult> GetOrderList()
        {
            ResponseViewModel res = new ResponseViewModel();
            try
            {
                var data = await _orderService.GetOrderList();
                res.Data = data;
                res.Success = true;
                res.Message = "取得訂單列表成功";
                res.HttpStatusCode = System.Net.HttpStatusCode.OK;
            }
            catch
            {
                res.Success = false;
                res.Message = "伺服器發生錯誤";
                res.HttpStatusCode = System.Net.HttpStatusCode.InternalServerError;
            }
            res.ResponseTime = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
            return Json(res, JsonRequestBehavior.AllowGet);
        }

        public async Task<JsonResult> GetOrderDetail(string OrderId)
        {
            ResponseViewModel res = new ResponseViewModel();
            try
            {
                var data = await _orderService.GetOrderDetail(OrderId);
                res.Data = data;
                res.Success = true;
                res.Message = "取得訂單明細成功";
                res.HttpStatusCode = System.Net.HttpStatusCode.OK;
            }
            catch
            {
                res.Success = false;
                res.Message = "伺服器發生錯誤";
                res.HttpStatusCode = System.Net.HttpStatusCode.InternalServerError;
            }
            res.ResponseTime = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
            return Json(res, JsonRequestBehavior.AllowGet);
        }
        public async Task<JsonResult> ConfirmOrder(List<OrderViewModel> model)
        {
            ResponseViewModel res = new ResponseViewModel();
            try
            {
                var data = await _orderService.ConfirmOrder(model);
                res.Data = data;
                res.Success = true;
                res.Message = "確認提交訂單成功";
                res.HttpStatusCode = System.Net.HttpStatusCode.OK;
            }
            catch
            {
                res.Success = false;
                res.Message = "伺服器發生錯誤";
                res.HttpStatusCode = System.Net.HttpStatusCode.InternalServerError;
            }
            res.ResponseTime = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
            return Json(res, JsonRequestBehavior.AllowGet);
        }
    }
}