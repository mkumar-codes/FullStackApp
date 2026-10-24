FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        default-libmysqlclient-dev \
        pkg-config \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

RUN useradd --create-home --uid 10001 app \
    && mkdir -p /app/media \
    && chown app:app /app/media

COPY --chown=app:app . .

USER app

EXPOSE 8000

CMD ["gunicorn", "paritech.wsgi:application", "--bind", "0.0.0.0:8000"]
