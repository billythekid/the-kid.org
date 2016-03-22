@extends('layouts.app')
@section('title', "Aberdeen PHP - Giveaway!")
@section('content')

    <div class="jumbotron">
        <h1>Aberdeen PHP Prize Draw</h1>
    </div>

    <div id="app">

        <div class="col-md-5">
            <h2>Add a contestant</h2>
            <div class="col-md-12">
                <div class="form-group">
                    <label for="newContestant">Name:</label>
                    <input class="form-control" id="newContestant" v-model="newContestant"
                           @keyup.enter="addContestant">
                </div>
            </div>
        </div>

        <div class="col-md-5">
            <h2>Add a prize</h2>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="prizeQuantity">Quantity:</label>
                    <input type="number" step="1" min="1" class="form-control" id="prizeQuantity" v-model="prizeQuantity" number value="1">
                </div>
            </div>
            <div class="col-md-9">
                <div class="form-group">
                    <label for="newPrize">Name:</label>
                    <input class="form-control" id="newPrize" v-model="newPrize" @keyup.enter="addPrize">
                </div>
            </div>

        </div>

        <div class="col-md-2">
            <div class="form-group">
                <div class="prizeButton img-rounded btn-success text-center" @click="pickWinners">
                    <i class="fa fa-5x fa-random"></i>
                </div>
            </div>
        </div>

        <div class="col-md-5">
            <p v-for="contestant in contestants">
                <button class="btn btn-danger" @click="removeContestant($index)"><i class="fa fa-2x fa-trash"></i>
                </button>
                @{{ contestant }}
            </p>
        </div>
        <div class="col-md-5">
            <p v-for="prize in prizes">
                <button class="btn btn-danger" @click="removePrize($index)"><i class="fa fa-2x fa-trash"></i>
                </button>
                @{{ prize.name }}
            </p>
        </div>

        <div class="results panel panel-success" v-if="winners.length">
            <div class="panel-heading">
                <h1>TONIGHT'S WINNERS!<button class="close" @click='clearWinners'>&times;</button></h1>
            </div>
            <table class="table table-hover">
                <tr v-for="winner in winners">
                    <td>
                        <i class="fa fa-2x fa-gift"></i> <span class="lead">@{{ winner.prize.name }}</span>
                    </td>
                    <td>
                        <i class="fa fa-2x fa-user"></i> <span class="lead">@{{ winner.name }}</span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
@endsection

@section('scripts')

@endsection