using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NJsonSchema;
using NSwag.AspNetCore;
using ProyectoSegundo.Models;

namespace ProyectoSegundo {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {

           // services.AddDbContext<BaseContext>(opt =>
           // opt.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=pry2DB;Trusted_Connection=True;"));

            //services.AddDbContext<BaseContext> (opt =>
              //opt.UseInMemoryDatabase ("TaskBD"));

           var oraConn = "User Id=softaxi;Password=123;Data Source=(DESCRIPTION =(ADDRESS_LIST =(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)))(CONNECT_DATA =(SERVICE_NAME = xepdb1)))";
            
           services.AddDbContext<BaseContext> (opt =>
           opt.UseOracle (oraConn));

            services.AddMvc ().SetCompatibilityVersion (CompatibilityVersion.Version_2_2);

            services.AddSwaggerDocument ();

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles (configuration => {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            } else {
                app.UseExceptionHandler ("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts ();
            }

            app.UseOpenApi ();
            app.UseSwaggerUi3 ();
            app.UseHttpsRedirection ();
            app.UseStaticFiles ();
            app.UseSpaStaticFiles ();

            app.UseMvc (routes => {
                routes.MapRoute (
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa (spa => {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment ()) {
                    spa.UseAngularCliServer (npmScript: "start");
                }
            });
        }
    }
}