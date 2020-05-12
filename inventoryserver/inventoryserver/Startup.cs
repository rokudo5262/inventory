using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using inventoryserver.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;
using AutoMapper;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc.Formatters;

namespace inventoryserver
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      var connection = Configuration.GetConnectionString("InventoryDatabase_4");
      services.AddDbContext<inventoryContext>(options => options.UseSqlServer(connection));
      services.AddCors(options => options.AddPolicy("MyPolicy", builder => {
        builder.WithOrigins("http://localhost:4200")
          .AllowAnyMethod()
          .AllowAnyHeader()
          .AllowCredentials();
      }));
      services.AddControllers();


      services.AddControllersWithViews(options =>
      {
        options.InputFormatters.Insert(0, GetJsonPatchInputFormatter());
      }).AddNewtonsoftJson(options =>
      {
        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
      }
      );
    }
     

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      app.UseRouting();
      app.UseCors(
         "MyPolicy"
      );

      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });



    }
    private static NewtonsoftJsonPatchInputFormatter GetJsonPatchInputFormatter()
    {
      var builder = new ServiceCollection()
          .AddLogging()
          .AddMvc()
          .AddNewtonsoftJson()
          .Services.BuildServiceProvider();

      return builder
          .GetRequiredService<IOptions<MvcOptions>>()
          .Value
          .InputFormatters
          .OfType<NewtonsoftJsonPatchInputFormatter>()
          .First();
    }
  }
}
