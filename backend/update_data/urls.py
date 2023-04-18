from django.urls import path
from .views import UpdateAPIView

urlpatterns = [
    path('api/update/', UpdateAPIView.as_view(), name='update-api'),
    path('api/update/<int:pk>/', UpdateAPIView.as_view(), name='update-alumni')

]
