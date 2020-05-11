﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace foo.api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
      public ActionResult<string> Get()
      {
         //var userClaims = User.Identity as System.Security.Claims.ClaimsIdentity;
         var wellcome = $"Hello buddy. Api call performed to:  https://bc2webapi.azurewebsites.net/. Your Runtime Version is: {System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription}";

         return wellcome;
      }      
      
    }
}
