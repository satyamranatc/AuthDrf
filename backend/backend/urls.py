from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('auth/', include('Auth.urls')),
    path('admin/', admin.site.urls),
]
