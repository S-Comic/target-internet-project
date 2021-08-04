<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Target Internet Project</title>

        <!-- Local Scripts / Styles -->
        <script src="/js/app.js"></script>
        <link href="/css/app.css" rel="stylesheet">
        <!-- Import Chart.js from npm -->
        <script src="{{ asset('chart.js/chart.js') }}"></script>
        <script src="https://kit.fontawesome.com/e9011249b1.js" crossorigin="anonymous"></script>

        <!-- CDNs -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet">
        
    </head>

    <body class="antialiased">

    <!-- Include the ouput blade template -->
    <main>
    <div id="outputContainer" class="container">
            @include('components.output') 
        </div>
        
        <div id="questionContainer" class="container">
            @include('components.questions') 
        </div>

    </main>


    <script src="{{ asset('js/charting.js') }}"></script>

    
    </body>
</html>
