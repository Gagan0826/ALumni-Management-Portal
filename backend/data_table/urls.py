from django.urls import path
from .views import AlumniList

urlpatterns = [
    path('alumni/', AlumniList.as_view(), name='alumni-list'),
    
]
