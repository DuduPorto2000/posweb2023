<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Star Rail</title>
</head>
<body class="d-flex justify-content-center align-items-center min-vh-100" >
<div class="border p-5  rounded background-form">
        <h1 class="mb-5 text-center">Galeria do Star Rail</h1>
        <a href="personagem/create" class="btn btn-primary w-100 mb-4">Create</a>
        <ul class="list-group mb-5">
            <?php $__currentLoopData = $personagens; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $personagem): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li class="list-group-item">
                    <h5 class="mb-4"><?php echo e($personagem->nome); ?></h5>
                    <a href="personagem/show/<?php echo e($personagem->id); ?>" class="btn btn-primary w-100 mb-3">Show</a>
                    <a href="personagem/edit/<?php echo e($personagem->id); ?>" class="btn btn-primary w-100 mb-3">Edit</a>
                    <a href="personagem/delete/<?php echo e($personagem->id); ?>" class="btn btn-primary w-100 mb-3">Delete</a>
                </li>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
    </div>
</body>
</html><?php /**PATH C:\xampp\htdocs\StarRailCaracters\resources\views/index.blade.php ENDPATH**/ ?>