var serverData;
$(document).ready(()=>{
    $('#loading-image').show();
    $('#month').prop('disabled',true);
    $('#load').prop('disabled',true);
    $.ajax({
        type: 'GET',
        url: './api/files'
    })
    .done((data)=>{
        serverData =  data;
        loadYears(data);
        $('#loading-image').hide();
    });


    $('#year').on('change',()=>{
        console.log(serverData);
        console.log(serverData[$('#year').val()]);
        loadMonths(serverData[$('#year').val()]);
    });

    $('#load').on('click',()=>{
        var file= $('#year').val()+"_"+$('#month').val()+".md";
        $('#loading-image').show();
        $.ajax({
            type: 'GET',
            url: './api/files/'+file
        })
            .done((data)=>{
                $('#data').html(marked(data.data));
                $('#loading-image').hide();
            });
    });
});

function loadYears(years){
    var html = '<option>Select</option><option>';
    html+=Object.keys(years).join('</option><option>');
    html+='</option>'
    $('#year').html(html);
    console.log(html);
}

function loadMonths(months) {
    if(!!months){
        $('#month').prop('disabled')?$('#month').prop('disabled',false):$('#month').prop('disabled',true);
        var html = '<option>Select</option><option>';
        html+=months.join('</option><option>');
        html+='</option>'
        $('#month').html(html);
        $('#load').prop('disabled',false);
        return;
    }

    $('#month').html('<option>Select</option>');
    $('#month').prop('disabled',true);
    $('#load').prop('disabled',true);
    return;
}