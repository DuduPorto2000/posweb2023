<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Star Rail</title>
</head>
<body class="d-flex justify-content-center align-items-center min-vh-100 background-body">
    <div class="border p-5 rounded background-form">
        <h1 class="mb-5 text-center">DETALHES DO PERSONAGEM</h1>

        <div class="mb-1">
            <label for="nome">Nome</label>
            <input type="text" name='nome' id='nome' class="form-control" value="<?php echo e($personagem->nome); ?>" readonly>
        </div>

        <div class="mb-1">
            <label for="raridade">Raridade</label>
            <input type="text" name='raridade' id='raridade' class="form-control" value="<?php echo e($personagem->raridade); ?>" readonly>
        </div>

        <div class="mb-1">
            <label for="caminho">Caminho</label>
            <input type="text" name='caminho' id='caminho' class="form-control" value="<?php echo e($personagem->caminho); ?>" readonly>
        </div>

        <div class="mb-1">
            <label for="elemento">Elemento</label>
            <input type="text" name='elemento' id='elemento' class="form-control" value="<?php echo e($personagem->elemento); ?>" readonly>
        </div>

        <div class="mb-1">
            <label for="faccao">Facçao</label>
            <input type="text" name='faccao' id='faccao' class="form-control" value="<?php echo e($personagem->faccao); ?>" readonly>
        </div>

    </div>
</body>
</html><?php /**PATH C:\xampp\htdocs\StarRailCaracters\resources\views/show.blade.php ENDPATH**/ ?>