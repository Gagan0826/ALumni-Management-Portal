from rest_framework import serializers
from data_table.models import Alumni

class MyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumni
        fields = '__all__'
