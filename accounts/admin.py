from django.contrib import admin
from .models import CustomUser
# admin アカウント名　a_oba
# password : password
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('id','username')
    list_display_links = ('id','username')
admin.site.register(CustomUser, CustomUserAdmin)
# Register your models here.
