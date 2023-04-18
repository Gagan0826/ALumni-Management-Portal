from django.contrib import admin
from .models import Alumni
# Register your models here.
#@admin.register(Alumni)
class AlumniAdmin(admin.ModelAdmin):
    list_display = ('name', 'usn', 'batch', 'company', 'designation')
    list_filter = ('batch', 'domain')
    search_fields = ('name', 'usn', 'company', 'designation')
admin.site.register(Alumni)