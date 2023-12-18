from django.shortcuts import render
from django.http import JsonResponse
# use api restframework
from rest_framework.decorators import api_view
from rest_framework.response import Response
# use serializers
from .serializers import TaskSerializer
from .models import *

@api_view(['GET'])
def apiView(request):
    api_urls ={
        'TaskList':   '/task-list',
        'TaskDetail': 'task-detail/<str:pk>',
        'CreateTask': '/create-task',
        'UpdateTask': '/update-task/<str:pk>',
        'DeleteTask': '/delete-task/<str:pk>'
    }
    return Response(api_urls)

# get all tasks
@api_view(['GET'])
def TaskList(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks , many = True)
    return Response(serializer.data)

# get detail task
@api_view(['GET'])
def TaskDetail(request, pk):
    tasks = Task.objects.get(id=pk)
    serializer = TaskSerializer(tasks, many = False)
    return Response(serializer.data)

@api_view(['POST'])
def CreateTask(request):
    serializer = TaskSerializer(data= request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)






