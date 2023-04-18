from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from data_table.models import Alumni
from .serializers import MyModelSerializer

class UpdateAPIView(APIView):
    def put(self, request, pk):
        try:
            obj = Alumni.objects.get(pk=pk)
        except Alumni.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = MyModelSerializer(obj, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.data,serializer.errors, status=status.HTTP_400_BAD_REQUEST)
