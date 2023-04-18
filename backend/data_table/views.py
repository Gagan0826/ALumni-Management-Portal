import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from .models import Alumni
from .serializers import AlumniSerializer

class AlumniList(generics.ListCreateAPIView):
    queryset = Alumni.objects.all()
    serializer_class = AlumniSerializer
