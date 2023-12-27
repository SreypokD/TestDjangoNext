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
        'DeleteTask': '/delete-task/<str:pk>',
        'Complete' : '/complete-task/<str:pk>'
    }
    return Response(api_urls)

# get all tasks
@api_view(['GET'])
def task_list(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks , many = True)
    return Response(serializer.data)

# get detail task
@api_view(['GET'])
def task_detail(request, pk):
    tasks = Task.objects.get(id=pk)
    serializer = TaskSerializer(tasks, many = False)
    return Response(serializer.data)

# create task
@api_view(['POST'])
def create_task(request):
    serializer = TaskSerializer(data= request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

# update task
@api_view(['PUT'])
def update_task(request, pk):
    tasks = Task.objects.get(id=pk)
    serializer = TaskSerializer(instance=tasks , data= request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

# delete task
@api_view(['DELETE'])
def delete_task(request, pk):
    tasks = Task.objects.get(id=pk)
    tasks.delete()
    return Response('Task has been deleted!')

# if complete
@api_view(['PUT'])
def complete_task(request, pk):
    
    task = Task.objects.get(id=pk)
    if(task.completed== 'false'):
        task.completed = True  # Use a single equal sign for assignment
    else:
        task.completed =False
    task.save()
    serializer = TaskSerializer(task)
    return Response(serializer.data)






