from django.contrib import admin
from django.urls import include,path


urlpatterns = [
    path('questionaire/api/v1', include('questionaire_api.urls')),
    path('admin/', admin.site.urls),

]
