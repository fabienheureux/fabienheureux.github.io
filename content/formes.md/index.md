+++
title = "Maurice Estève, ChatGPT et creative coding"
date = 2024-11-30
description = """
Cherchant à illustrer un futur article. J'ai voulu voir ce que permettait ChatGPT en la matière. <br>
Pas convaincu au départ, l'outil a finalement révélé un potentiel intéressant, notamment pour du <i>creative coding</i>.
"""
+++

**Objectif** : obtenir une méthode réutilisable permettant de générer des illustrations.

**Préambule** : inspiré par des médias comme [Le Monde Diplomatique](https://www.monde-diplomatique.fr), qui proposent des oeuvres en guise d'illustrations, je souhaitais illuser mes futurs articles.
Pour autant, je ne souhaite pas utiliser [Midjourney](https://en.wikipedia.org/wiki/Midjourney) ou [DALL-E](https://en.wikipedia.org/wiki/DALL-E) car l'objectif est de conserver des pages légères.

Je suis donc parti sur des illustrations à base de CSS et HTML.

## Première version

Le travail du mouvement [De Stijl](https://fr.wikipedia.org/wiki/De_Stijl) étant très géométrique, il se prête parfaitement bien à des illustrations légères.
Dans ce premier jet, j'ai demandé à ChatGPT de me générer une forme en HTML/CSS inspirée de ce mouvement.

```
can you generate a design using css and html, inspired by de Stijl, using only #5a5766 and #f25c80 colors ?
```

Le résultat - ci-dessous - était assez catastrophique...bien que pas inintéressant.

<style>
    #de-stijl.container {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: 4px;
        height: 20rem;
        background-color: white;
    }
    #de-stijl .block {
        background-color: #f25c80;
        border: 4px solid #5a5766;
    }
    #de-stijl .tall { grid-row: span 2; }
    #de-stijl .wide { grid-column: span 2; }
    #de-stijl .large { grid-column: span 2; grid-row: span 2; }
</style>
<div class="container" id="de-stijl">
    <div class="block"></div>
    <div class="block wide"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block tall"></div>
    <div class="block"></div>
    <div class="block large"></div>
    <div class="block"></div>
    <div class="block tall"></div>
    <div class="block wide"></div>
</div>

Après plusieurs tentatives similaires, le résultat était toujours assez décevant.
Même sans restreindre les couleurs à utiliser.

**J'ai ajusté le prompt**, pour lui demander de générer un SVG directement :
```
can you generate an svg, inspired by this painting
```

La peinture en question :
![Maurice Estève](./image.jpg)

J'utilise assez rarement ChatGPT, et ai découvert qu'à chaque étape de génération du SVG, le **code Python généré est accessible**.

Le code généré était en réalité composé de deux scripts Python successif :
- **Un premier** passablement inutile :
  - il télécharge l'image et l'analyse avec [Pillow](https://github.com/python-pillow/Pillow)
  - puis la convertit en array Numpy
  - puis...n'en fait pas grand chose. A priori cette partie lui sert essentiellement à en déterminer les dimensions (et semble un peu _overkill_)
- **Un second** se chargeant de la génération du SVG proprement dite. C'est à lui qu'on s'intéresse ci-après.

### Le script

Ci-dessous le script généré :

```py
import random
from PIL import Image
import numpy as np

# Open the uploaded image
image_path = "./image.jpg"
image = Image.open(image_path)

# Define a function to generate random colors similar to the ones in the image
def generate_random_color():
    return f"rgb({random.randint(100, 255)}, {random.randint(50, 200)}, {random.randint(50, 255)})"

# Define a function to create a simple SVG structure with abstract shapes
def generate_svg(width, height, num_shapes=10):
    svg_header = (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}">'
    )
    svg_footer = "</svg>"

    # Generate random abstract shapes
    shapes = ""
    for _ in range(num_shapes):
        shape_type = random.choice(["circle", "rect", "polygon"])

        if shape_type == "circle":
            cx = random.randint(0, width)
            cy = random.randint(0, height)
            r = random.randint(20, 100)
            shapes += f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{generate_random_color()}" />'

        elif shape_type == "rect":
            x = random.randint(0, width)
            y = random.randint(0, height)
            w = random.randint(50, 200)
            h = random.randint(50, 200)
            shapes += f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{generate_random_color()}" />'

        elif shape_type == "polygon":
            points = [
                f"{random.randint(0, width)},{random.randint(0, height)}"
                for _ in range(random.randint(3, 6))
            ]
            points_str = " ".join(points)
            shapes += (
                f'<polygon points="{points_str}" fill="{generate_random_color()}" />'
            )

    return svg_header + shapes + svg_footer


# Generate the SVG with the dimensions of the uploaded image
svg_content = generate_svg(image.width, image.height, num_shapes=15)

svg_path = f"./generated_artwork-{i}.svg"
with open(svg_path, "w") as file:
    file.write(svg_content)
```

Il n'est pas forcément utilisable tel quel, je l'ai **très légèrement remanié** pour fonctionner sur ma machine en local.
Notamment pour charger une image locale plutôt que distante.

**Dans un second temps**, je l'ai retouché pour n'afficher que certaines couleurs, car le première version proposait des couleurs un peu trop ternes.

```py

def generate_random_color():
    # Define basic colors and their corresponding RGB values
    basic_colors_rgb = {
        "red": (255, 0, 0),
        "blue": (0, 0, 255),
        "yellow": (255, 255, 0),
        "black": (0, 0, 0),
    }

    # Select a random color
    color_name = random.choice(list(basic_colors_rgb.keys()))

    # Get the RGB value and format it as 'rgb(r, g, b)'
    rgb_value = basic_colors_rgb[color_name]
    return f"rgb{rgb_value}"
```

**Enfin**, j'ai ajouté une boucle pour générer une centaine de résultats en faisant varier le nombre de formes.

```py
for i in range(1, 99):
    # Generate the SVG with the dimensions of the uploaded image
    svg_content = generate_svg(image.width, image.height, num_shapes=i * 2)

    svg_path = f"./generated_artwork-{i}.svg"
    with open(svg_path, "w") as file:
        file.write(svg_content)
```

## Conclusion

On voit ici que ChatGPT (et les LLM plus généralement), détourné de l'utilisation initiale - à savoir obtenir un SVG - permet de créer une méthodologie réutilisable.
J'aurais certainement pu aboutir à un résultat similaire en me creusant un peu la tête...mais ça m'aurait certainement pris quelques heures de plus.

Autant les LLM montrent leurs limites (à mes yeux) pour de la génération d'images, car on retrouve un style assez uniforme et parfois fade.
Autant pour du [creative coding](https://en.wikipedia.org/wiki/Creative_coding), on peut facilement imaginer des usages vraiment intéressants, où les *hallucinations* peuvent amener à des


---


## Le résultat

![Forme 1](./generated_artwork-1.svg)
![Forme 2](./generated_artwork-2.svg)
![Forme 3](./generated_artwork-3.svg)
![Forme 4](./generated_artwork-4.svg)
![Forme 5](./generated_artwork-5.svg)
![Forme 6](./generated_artwork-6.svg)
![Forme 7](./generated_artwork-7.svg)
![Forme 8](./generated_artwork-8.svg)
![Forme 9](./generated_artwork-9.svg)
![Forme 10](./generated_artwork-10.svg)
![Forme 11](./generated_artwork-11.svg)
![Forme 12](./generated_artwork-12.svg)
![Forme 13](./generated_artwork-13.svg)
![Forme 14](./generated_artwork-14.svg)
![Forme 15](./generated_artwork-15.svg)
![Forme 16](./generated_artwork-16.svg)
![Forme 17](./generated_artwork-17.svg)
![Forme 18](./generated_artwork-18.svg)
![Forme 19](./generated_artwork-19.svg)
![Forme 20](./generated_artwork-20.svg)
![Forme 21](./generated_artwork-21.svg)
![Forme 22](./generated_artwork-22.svg)
![Forme 23](./generated_artwork-23.svg)
![Forme 24](./generated_artwork-24.svg)
![Forme 25](./generated_artwork-25.svg)
![Forme 26](./generated_artwork-26.svg)
![Forme 27](./generated_artwork-27.svg)
![Forme 28](./generated_artwork-28.svg)
![Forme 29](./generated_artwork-29.svg)
![Forme 30](./generated_artwork-30.svg)
![Forme 31](./generated_artwork-31.svg)
![Forme 32](./generated_artwork-32.svg)
![Forme 33](./generated_artwork-33.svg)
![Forme 34](./generated_artwork-34.svg)
![Forme 35](./generated_artwork-35.svg)
![Forme 36](./generated_artwork-36.svg)
![Forme 37](./generated_artwork-37.svg)
![Forme 38](./generated_artwork-38.svg)
![Forme 39](./generated_artwork-39.svg)
![Forme 40](./generated_artwork-40.svg)
![Forme 41](./generated_artwork-41.svg)
![Forme 42](./generated_artwork-42.svg)
![Forme 43](./generated_artwork-43.svg)
![Forme 44](./generated_artwork-44.svg)
![Forme 45](./generated_artwork-45.svg)
![Forme 46](./generated_artwork-46.svg)
![Forme 47](./generated_artwork-47.svg)
![Forme 48](./generated_artwork-48.svg)
![Forme 49](./generated_artwork-49.svg)
![Forme 50](./generated_artwork-50.svg)
![Forme 51](./generated_artwork-51.svg)
![Forme 52](./generated_artwork-52.svg)
![Forme 53](./generated_artwork-53.svg)
![Forme 54](./generated_artwork-54.svg)
![Forme 55](./generated_artwork-55.svg)
![Forme 56](./generated_artwork-56.svg)
![Forme 57](./generated_artwork-57.svg)
![Forme 58](./generated_artwork-58.svg)
![Forme 59](./generated_artwork-59.svg)
![Forme 60](./generated_artwork-60.svg)
![Forme 61](./generated_artwork-61.svg)
![Forme 62](./generated_artwork-62.svg)
![Forme 63](./generated_artwork-63.svg)
![Forme 64](./generated_artwork-64.svg)
![Forme 65](./generated_artwork-65.svg)
![Forme 66](./generated_artwork-66.svg)
![Forme 67](./generated_artwork-67.svg)
![Forme 68](./generated_artwork-68.svg)
![Forme 69](./generated_artwork-69.svg)
![Forme 70](./generated_artwork-70.svg)
![Forme 71](./generated_artwork-71.svg)
![Forme 72](./generated_artwork-72.svg)
![Forme 73](./generated_artwork-73.svg)
![Forme 74](./generated_artwork-74.svg)
![Forme 75](./generated_artwork-75.svg)
![Forme 76](./generated_artwork-76.svg)
![Forme 77](./generated_artwork-77.svg)
![Forme 78](./generated_artwork-78.svg)
![Forme 79](./generated_artwork-79.svg)
![Forme 80](./generated_artwork-80.svg)
![Forme 81](./generated_artwork-81.svg)
![Forme 82](./generated_artwork-82.svg)
![Forme 83](./generated_artwork-83.svg)
![Forme 84](./generated_artwork-84.svg)
![Forme 85](./generated_artwork-85.svg)
![Forme 86](./generated_artwork-86.svg)
![Forme 87](./generated_artwork-87.svg)
![Forme 88](./generated_artwork-88.svg)
![Forme 89](./generated_artwork-89.svg)
![Forme 90](./generated_artwork-90.svg)
![Forme 91](./generated_artwork-91.svg)
![Forme 92](./generated_artwork-92.svg)
![Forme 93](./generated_artwork-93.svg)
![Forme 94](./generated_artwork-94.svg)
![Forme 95](./generated_artwork-95.svg)
![Forme 96](./generated_artwork-96.svg)
![Forme 97](./generated_artwork-97.svg)
![Forme 98](./generated_artwork-98.svg)
![Forme 99](./generated_artwork-99.svg)
