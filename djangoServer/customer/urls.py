from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiView, name='api-view'),
    path('task-list/', views.task_list, name = 'task-list'),
    path('task-detail/<str:pk>/', views.task_detail, name = 'task-detail'),
    path('create-task/', views.create_task, name = 'create-task'),
    path('update-task/<str:pk>/', views.update_task, name = 'update-task'),
    path('delete-task/<str:pk>/', views.delete_task, name = 'delete-task')

    # Add more paths as needed
]