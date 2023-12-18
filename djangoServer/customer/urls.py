from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiView, name='api-view'),
    path('task-list/', views.TaskList, name = 'task-list'),
    path('task-detail/<str:pk>/', views.TaskDetail, name = 'task-detail'),
    path('create-task/', views.CreateTask, name = 'create-task')
    # Add more paths as needed
]