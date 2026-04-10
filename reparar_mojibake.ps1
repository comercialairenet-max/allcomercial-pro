Set-Location "C:\PROYECTOS\allcomercial-vercel"

Write-Host "== Reparando mojibake por conversion CP1252 -> UTF8 ==" -ForegroundColor Cyan

$extensions = @("*.ts", "*.tsx", "*.js", "*.jsx", "*.json", "*.md", "*.css")

$utf8  = [System.Text.Encoding]::UTF8
$cp1252 = [System.Text.Encoding]::GetEncoding(1252)

function Get-SuspectScore([string]$text) {
    $c1 = ([regex]::Matches($text, [string][char]0x00C3)).Count
    $c2 = ([regex]::Matches($text, [string][char]0x00C2)).Count
    $c3 = ([regex]::Matches($text, [string][char]0x00E2)).Count
    return ($c1 + $c2 + $c3)
}

$files = Get-ChildItem -Recurse -File -Include $extensions | Where-Object {
    $_.FullName -notmatch "\\node_modules\\" -and
    $_.FullName -notmatch "\\.next\\" -and
    $_.FullName -notmatch "\\.git\\"
}

foreach ($file in $files) {
    $original = [System.IO.File]::ReadAllText($file.FullName, $utf8)

    $beforeScore = Get-SuspectScore $original

    $converted = $utf8.GetString($cp1252.GetBytes($original))
    $afterScore = Get-SuspectScore $converted

    if ($afterScore -lt $beforeScore) {
        Copy-Item $file.FullName ($file.FullName + ".bak") -Force
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($file.FullName, $converted, $utf8NoBom)
        Write-Host "Corregido: $($file.FullName)" -ForegroundColor Green
    }
}

Write-Host "== Reparacion terminada ==" -ForegroundColor Cyan
Write-Host "Se creo copia .bak de cada archivo modificado." -ForegroundColor Yellow