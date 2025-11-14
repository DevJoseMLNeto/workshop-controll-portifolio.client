import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { meuhttpInterceptor } from './app/auth/http-interceptor.service';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


